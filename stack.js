function IWantFullCallbacks() {
    setTimeout(function () {
        const localStack = new Error();
        console.log(localStack.stack);
    }, 1000);
}

IWantFullCallbacks();