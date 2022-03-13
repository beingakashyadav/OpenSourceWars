// const contractDado = '0x85e752b734Dc0bC4c82240Ed6bB1a16415f3d44b';
// const abi = JSON.parse('[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "aFighter", "type": "uint256" } ], "name": "FighterBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "buyers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_idFighter", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" } ], "name": "chooseFighter", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "int256", "name": "result1", "type": "int256" }, { "internalType": "int256", "name": "result2", "type": "int256" }, { "internalType": "uint256", "name": "_idFighter2", "type": "uint256" } ], "name": "fight", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "fighterMapping", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getContractAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getDadoAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_aPosition", "type": "uint256" } ], "name": "getFighterFrom", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFighterOwners", "outputs": [ { "internalType": "address[6]", "name": "", "type": "address[6]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "returnToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_inAddress", "type": "address" } ], "name": "rollDice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_inAddress", "type": "address" } ], "name": "showResult", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_toAccount", "type": "address" } ], "name": "transferFundsToDeveloper", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unDado", "outputs": [ { "internalType": "contract VRFD20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]');
const contractAddress = "0xD1A3A8669ebD858371e04833Bd29FA4DeA4c3e4D";
const abi = JSON.parse('[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "aFighter", "type": "uint256" } ], "name": "FighterBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_idFighter", "type": "uint256" }, { "internalType": "uint256", "name": "_price", "type": "uint256" } ], "name": "chooseFighter", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "int256", "name": "result1", "type": "int256" }, { "internalType": "int256", "name": "result2", "type": "int256" }, { "internalType": "uint256", "name": "_idFighter2", "type": "uint256" } ], "name": "fight", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_inAddress", "type": "address" } ], "name": "rollDice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_toAccount", "type": "address" } ], "name": "transferFundsToDeveloper", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "buyers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "fighterMapping", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getContractAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getDadoAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_aPosition", "type": "uint256" } ], "name": "getFighterFrom", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFighterOwners", "outputs": [ { "internalType": "address[6]", "name": "", "type": "address[6]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLastWinner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastWinner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "returnLINKS", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_inAddress", "type": "address" } ], "name": "showResult", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unDado", "outputs": [ { "internalType": "contract VRFD20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]');


var dado1 = -1;
var dado2 = -1;

/**
 * @dev Web3
 *  
 */
const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        try {
          // ask user permission to access his accounts
          await window.ethereum.request({ method: 'eth_requestAccounts' })
          resolve(web3)
        } catch (error) {
          reject(error)
        }
      } else {
        reject('MetaMask is NOT installed')
      }
    })
  })
}


/**
* @dev Trae la información de los luchadores desde un JSON y los mete en un HTML
*/
getJsonFighters = async () => {

  $.getJSON('fighters.json', function (data) {
    var fightersRow = $('#fightersRow');
    var fighterTemplate = $('#fighterTemplate');

    for (i = 0; i < data.length; i++) {
      fighterTemplate.find('.panel-title').text(data[i].name);
      fighterTemplate.find('.panel-title').attr('id','n'+data[i].id);
      fighterTemplate.find('img').attr('src', data[i].picture);

      fighterTemplate.find('.fighter-strength').text(data[i].strength);
      fighterTemplate.find('.fighter-strength').attr('id','s'+data[i].id);

      fighterTemplate.find('.fighter-difficulty').text(data[i].difficulty);
      fighterTemplate.find('.fighter-difficulty').attr('id','d'+data[i].id);

      fighterTemplate.find('.fighter-price').text(data[i].price);
      fighterTemplate.find('.fighter-price').attr('id','p'+data[i].id);
      //fighterTemplate.find('.fighter-price').attr('data-id',data[i].price);

      fighterTemplate.find('#btn-buy').attr('data-id', data[i].id);

      fightersRow.append(fighterTemplate.html());
    }
  });
}

/**
* @dev Obtiene información de los luchadores
*/
async function getFighters(contract) {

  result = await contract.methods.getFighterOwners().call();
  var fighterTemplate = $('#fighterTemplate');
  /**
   * @dev Deshabilita a los luchadores que ya fueron comprados
   */
  for (i = 0; i < result.length; i++) {
    if (result[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-fighter').eq(i).find('button').text('Sold').attr('disabled', true);

      if (result[i] == account){
        let fighterName = $("#n"+i).text();
        $(`<option value=${i}>${fighterName}</option>`).appendTo("#fightersPlayer1");
      }else{
        let fighterName = $("#n"+i).text();
        $(`<option value=${i}>${fighterName}</option>`).appendTo("#fightersPlayer2");
      }     
    }
  }
}

async function lastWinner(contract){

  winner = await contract.methods.getLastWinner().call();
  $("#last-winner").text(winner);

}

async function getBalance(contract){

  
  let dadoAddress = await contract.methods.getDadoAddress().call();
  $("#link-contract").text(dadoAddress);

  let resultBalance = await contract.methods.getBalance().call();
  resultBalance = resultBalance / 1000000000000000000;
  $("#recaudado").text(resultBalance);

  let resultado = await contract.methods.buyers(account).call();
  $("#saldo").text(resultado);
  
  let resultLink = await contract.methods.returnLINKS().call();
  $("#links").text(resultLink/1000000000000000000);
}


function bindEvents(contract){

  $(document).on("click", "#btn-buy", async function (event) {

    /**
     * @dev hice un objeto solo a efectos de mejor visualización
     */
    var idFighter = parseInt($(event.target).data("id"));

    var objFigther = {
      fighter : idFighter,
      strength : $("#s" + idFighter).text(),
      difficulty : $("#d" + idFighter).text(),
      price : $("#p" + idFighter).text()
    }

    console.log("Luchador: " + objFigther.fighter);
    console.log("Fuerza: " + objFigther.strength);
    console.log("Dificultad: " + objFigther.difficulty);
    console.log("Precio: " + objFigther.price);

    saldo = await contract.methods.buyers(account).call();
    console.log("Saldo " + saldo);

    result = await contract.methods.chooseFighter(objFigther.fighter,objFigther.price).send({from: account});
   
    location.reload();
  }
  );


  // Icon
  let loaderImg = document.createElement("img");
  loaderImg.src = "../images/Blocks-1s-200px.gif";
  loaderImg.id = "loaderChico";
  loaderImg.className = "loaderChico";
  /*
  let noteLoader = document.createElement("td");
  noteLoader.appendChild(loaderImg);
  noteLoader.className = "divTableLoad";*/

  // Falta agregar los botones dice1 y dice2
  $(document).on("click","#btn-dice1", async function(){
    /* console.log("Contrato: "+ contractAddress);
    console.log("cuenta: "+ account); */
    let a = await contract.methods.rollDice(account).send({from: account});
      console.log("Dado tirado");
      location.reload();
    } 
  );

  $(document).on("click","#btn-dice2", async function(){
    let diceResult = await contract.methods.showResult(account).call();
    console.log("Resultado: " + diceResult)
    $("#dice-result").text(diceResult);
    dado1 = diceResult;
    setUpButtons();
  }
  );


  $(document).on("click","#btn-fight", async function (){


    /**
      * @dev hice un objeto solo a efectos de mejor visualización
      */
      var idFighter1 = $("#fightersPlayer1").val();

      var objFigther1 = {
          fighter : idFighter1,
          strength : $("#s" + idFighter1).text(),
          difficulty : $("#d" + idFighter1).text()
        }

      var idFighter2 = $("#fightersPlayer2").val();
      var objFigther2 = {
        fighter : idFighter2,
        strength : $("#s" + idFighter2).text(),
        difficulty : $("#d" + idFighter2).text()
      }     

      // Este random es para el Enemigo y lo obtengo por Javascript
      dado2 = Math.floor(Math.random() * 42) + 1;
      console.log("Random 2; " + dado2);

      let result1 = Math.trunc(objFigther1.strength * dado1 - (objFigther1.difficulty / dado1)/2);
      let result2 = Math.trunc(objFigther2.strength * dado2 - (objFigther1.difficulty / dado2)/2);    

      console.log(`Mi puntaje: ${result1} / Puntaje enemigo: ${result2}`);

      match = await contract.methods.fight(result1, result2, objFigther2.fighter).send({from:account});

      lastWinner(contract);
 
      if (winner == account){
        alert("Ha ganado!")
      }
      else{
        alert("Ha perdido")
      }

      location.reload();
    }
  );

  /**
   * @dev Sólo se puede transferir el monto recaudado al que deployó el contratos
   */
  $(document).on("click","#btn-collect", async function(){
   result = await contract.methods.transferFundsToDeveloper(account).send({from: account});
  })
}

function setUpButtons(){

  if (dado1 == -1){
    $("#btn-fight").attr('disabled', true)
  }
  else{
    $("#btn-fight").attr('disabled', false)
  }
}

/**
 * @dev Inicializa la página
 * @param {*} contratoGlobal 
 * @returns 
 */

function initMainPage(contratoGlobal) {
 
  getJsonFighters();
  
  $("#contract-address").text(contractAddress);
 

  getBalance(contratoGlobal);

  setUpButtons();

  getFighters(contratoGlobal);

  $("#playerAccount").text(account);


  lastWinner(contratoGlobal);

  return bindEvents(contratoGlobal);
}



/**
 * 
 * @dev Instancia el contrato
 * @returns Devuelve contrato
 */
const getContract = async web3 => {
  const OSWContract = new web3.eth.Contract(abi, contractAddress);
  return OSWContract
}

async function App(){
  web3Provider = null
  
  const web3 = await getWeb3()
  const accounts = await web3.eth.getAccounts()
  const OSWContract = await getContract(web3)

  /* console.log(contract) 
  for (i=0; i < accounts.length; i++){ 
    var anAccount = accounts[i];
    var strOption = "<option value='" + anAccount + "'>" + anAccount + "</option>";
    $(strOption).appendTo("#addressSelect");
  }*/

  let OpenSourceWars

  //contratoGlobal = contract
  account = accounts[0];

  // document.getElementById('account').innerHTML = account;
  // getNotes(OpenSourceWars, OSWContract);


  initMainPage(OSWContract);

}

App()
