App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load fighters.
    $.getJSON('../fighters.json', function(data) {
      var fightersRow = $('#fightersRow');
      var fighterTemplate = $('#fighterTemplate');

      for (i = 0; i < data.length; i ++) {
        fighterTemplate.find('.panel-title').text(data[i].name);
        fighterTemplate.find('img').attr('src', data[i].picture);
        fighterTemplate.find('.fighter-strength').text(data[i].strength);
        fighterTemplate.find('.fighter-difficulty').text(data[i].difficulty);
        fighterTemplate.find('.btn-choose').attr('data-id', data[i].id);

        fightersRow.append(fighterTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('../fighters.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var OSWArtifact = data;
      App.contracts.OpenSourceWars = TruffleContract(OSWArtifact);

      // Set the provider for our contract
      App.contracts.OpenSourceWars.setProvider(App.web3Provider);


      // Use our contract to retrieve and mark fighters already bought
      return App.markBought();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on("click", ".btn-buy", App.handleBuy);
  },

  markBought: function(buyers, account) {
    var OSWInstance;

    App.contracts.OpenSourceWars.deployed().then(function(instance) {
      OSWInstance = instance;

      // Obtiene la dirección de contrato
      var contractAddress = OSWInstance.getContractAddress().call;
      $('#contract-address').val(contractAddress);
      console.log(contractAddress);

      return OSWInstance.buyers.call();
    }).then(function(buyers) {
      for (i = 0; i < buyers.length; i++) {
        if (buyers[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-fighter').eq(i).find('button').text('Success').attr('disabled', true);
        }
      }
    }).catch(function(err) {
      console.log(err.message);
    });
  },

  handleBuy: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    var OSWInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.OpenSourceWars.deployed().then(function(instance) {
        OSWInstance = instance;

        // Execute adopt as a transaction by sending account
        return OSWInstance.adopt(petId, {from: account});
      }).then(function(result) {
        return App.markBought();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
