const SimpleStorage = artifacts.require("SimpleStorage.sol");

contract("SimpleStorage", () => { // We named our test contract Bloc as "SimpleStorage". It can be anything else.

    it("should update data", async () => { //"Should update data" is the name of our it test bloc.
        const storage = await SimpleStorage.new(); //our original contract is deployed."storage" is a pointer to our smart contract which is deployed on ganache local development blockchain
        await storage.updateData(10); //Here we call our function, and give a parameter value
        const data = await storage.readData();//After function executes, we get some data, and store it in "data" variable.
        assert(data.toString() === "10");//We convert the number we get to string. Because javascript cannot handle big numbers. Of course 10 is a small number. 
                                        //But in any case, people are converting numbers to string as convention. 
    });

});
/*
Our test file has only one test bloc. Each test block starts with "it"
Our original contract is very simple, that's why it has only one test bloc.


*/