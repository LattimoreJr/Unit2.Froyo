const froyo = prompt(
    "Please enter the flavors you would like to order separated by commas.",
    "vanilla, chocolate, strawberry");

    const array = froyo.split(",");
    const froyoStats = {};

    for (let  i = 0; i < array.length; i++) {
        const flavor = array[i];

        if (froyoStats[flavor] === undefined) {
            froyoStats[flavor] = 0;
        }
        froyoStats[flavor]++;
  
    }
    console.table(froyoStats);