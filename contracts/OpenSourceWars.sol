// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./RollDice.sol";


contract OpenSourceWars is Ownable {

    VRFD20 public unDado;

    // El último ganador de la pelea
    address public lastWinner;

    /** @dev compradores */
    mapping(address => uint) public buyers;

    /**
    * @dev Se elige un struct para el luchador porque se puede hacer evolucionar ciertas
    * @dev características como velocidad y dificultad (facilidad de uso)
    */
    /*
    struct Fighter {
        uint idFighter;
        uint strength; // maximo 1000
        uint difficulty; // maximo 0 
    } 
    */

    address[6] fighterOwners;
    mapping(address => uint) public fighterMapping;  // es necesario manejar esto?

    /* @dev Eventos */
    event FighterBought(uint aFighter);

    /* =============================================================*/

    constructor(){

        unDado = new VRFD20();
    }

    /**
    * @dev Getters
     */

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getContractAddress() public view returns(address)
    {
        return address(this);
    }
    
    function getFighterOwners() public view returns (address[6] memory){

        return fighterOwners;
    }

    function getFighterFrom(uint _aPosition) public view returns(address){
        return fighterOwners[_aPosition];
    }

    function getLastWinner() public view returns(address){
        return lastWinner;
    }

    /**
    * @dev Se elige un luchador a comprar. Se pasan parámetros porque la idea es 
    * @dev almacenar la información para poder hacer evolucionar al luchador
    * @param _idFighter: es el luchador
    * @param _price: es el precio del luchador
    */
    function chooseFighter(uint _idFighter, uint _price) public returns (uint){
        /**
        * @dev Debe elegir un luchador válido
         */
        require (_idFighter >= 0 && _idFighter <= 5, "Choose your fighter");


        /**
        * @dev No puede comprar un luchador que ya compró.
        * @dev Tal vez esto se podría evitar si hago el control previamente en la página.
         */
        require (fighterOwners[_idFighter] == 0x0000000000000000000000000000000000000000, "Already taken");

        require(msg.sender != fighterOwners[fighterMapping[msg.sender]], "You can only buy one fighter");

        /** 
        * @dev Si se tienen suficientes fondos, se puede comprar el luchador
        * @dev y se descuenta del array de compradores (Comprador => ETH).
        * @dev Se asigna al array de luchadores (Luchador => Comprador)
        * @dev Se asigna al mapeo de luchadores (Comprador => Luchador).
        */
        require(buyers[msg.sender] >= _price, "Not enough funds");

        buyers[msg.sender] -= _price;
        
        fighterOwners[_idFighter] = msg.sender;
        fighterMapping[msg.sender] = _idFighter;
        /*
        fighterMapping[msg.sender] = Fighter({
                                            idFighter: _idFighter,
                                            strength: _strength,
                                            difficulty: _difficulty
                                            });
        */
        emit FighterBought(_idFighter);
        return _idFighter;
    }

    /**
    * @dev Función de tirar el dado
    */
    function rollDice(address _inAddress) public{
        // tirar un dado

        bytes32 request;
        request = unDado.rollDice(_inAddress);

    }

    function showResult(address _inAddress) public view returns (uint256){
        return unDado.result(_inAddress);
    }

    function returnLINKS() public view returns(uint256){
        return unDado.returnLINK();

    }

    function getDadoAddress() public view returns(address){
        return unDado.getContractAddressLink();

    }


    /**
    * @dev Luchar. Se tira el dado 2 veces, una vez para la fuerza, la otra para la
    * @dev dificultad. La fórmula de lucha es:
    * @dev [Fuerza * dado - (Dificultad * dado /2)]
    * @dev El que obtenga mayor puntaje es el ganador
    * @dev Si empatan queda el último ganador y deberán luchar de nuevo
    * @dev No se requiere el idFighter1 ya que se utiliza el address del msg.sender 
    * @param _idFighter2: luchador enemigo
    */
    function fight(int256 result1, int256 result2,
                 uint _idFighter2) public {

        if (result1 > result2){
            lastWinner = msg.sender;
            //return lastWinner;
        }            
        else{
            if (result1 == result2){
                lastWinner = 0x0000000000000000000000000000000000000000;
            }
            else{
                lastWinner = this.getFighterFrom(_idFighter2);
               // return lastWinner;
            }
        } 
    }


    /**
    * @dev Como desarrollador, puedo transferirme todo dinero del juego a mi wallet
    * @param _toAccount: la dirección de mi wallet
    */
    function transferFundsToDeveloper(address payable _toAccount) public onlyOwner {
        //require(address(this).balance >= _amount, "You don't have enough funds");
        _toAccount.transfer(address(this).balance);
    }

    /* @dev Recibo ETH de billeteras externas */
    receive() payable external{

        /** @dev Se carga un array de compradores para poder comprar después los luchadores */
        buyers[msg.sender] += msg.value;
    }

}