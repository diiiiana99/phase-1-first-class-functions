

function receivesAFunction(spy) {
    return spy();
}
function returnsANamedFunction() {
    return function addNun(){
        return 2 + 2
    }
}
function returnsAnAnonymousFunction(){
    return function() {
        return ("");
    }
}

