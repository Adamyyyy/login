window.addEventListener("load", () => {
  {
    let i = 0;
    while (i < 10) {
      console.log(i);
      i++;
    }

    console.log("===================================");

    for (let i = 0; i < 10; i++) {
      console.log("for: ", i);
    }
    console.log("===================================");
    const list = [45, 56, 67, 78];

    for (let key in list) {
      console.log(key);
    }

    for (let element of list) {
      console.log(element);
    }

    console.log("===================================");

    const user = {
      name: "Raymond",
      age: 30,
      profile: {},
      1: [1, 2, 3],
      0: 23,
    };

    for (let i in user) {
      console.log(i);
    }
    console.log(Object.keys(user));

    // for(let el of user){
    //   console.log(el);
    // }
  }

  {
    const list = [45, 56, 67, 78];

    let i = 0;
    while (i < list.length) {
      console.log(i);
      console.log(list[i]);
      if (i === 2) {
        break;
        return;
      }
      i++;
    }

    console.log("===================================");

    console.log("===================================");

    for (let key in list) {
      console.log(key);
      console.log(list[key]);
      if (key === "2") {
        break;
      }
    }

    console.log("===================================");

    for (let el of list) {
      console.log(el);
      if (el === 67) {
        break;
      }
    }

    console.log("===================================");

    list.forEach((element, index) => {
      console.log(index);
      console.log(element);
      if (index === 2) {
        return;
      }
    });

    console.log("===================================");

    list.some((element, index) => {
      console.log(index);
      console.log(element);
      if (index === 2) {
        return true;
      }
    });

    console.log("===================================");

    list.every((element, index) => {
      console.log(index);
      console.log(element);
      if (index === 2) {
        return false;
      }
      return true;
    });
  }

  {
    console.log("===================================");
    const number = 5;
    const numberList = [34, 69, 19, 39, 432];

    for (let i = 0; i < numberList.length; i++) {
      console.log(numberList[i] + number);
    }

    console.log("===================================");
    for (let key in numberList) {
      console.log(numberList[key] + number);
    }

    console.log("===================================");

    for (let el of numberList) {
      console.log(el + number);
    }

    console.log("===================================");

    numberList.forEach((el, index) => {
      console.log(el + number);
      console.log(numberList[index] + number);
    });

    console.log("===================================");

    console.log(numberList.map((el) => el + number));
    numberList.map((el) => console.log(el + number));
  }

  {
    console.log("===================================");
    const numberList = [34, 69, 19, 39, 432];
    const numberList2 = [93, 374, 726, 5483];

    for (let i = 0; i < numberList.length; i++) {
      let sum = numberList[i] + numberList2[0];
      console.log(`${numberList[i]} + ${numberList2[0]} = ${sum}`);

      sum = numberList[i] + numberList2[1];
      console.log(`${numberList[i]} + ${numberList2[1]} = ${sum}`);

      sum = numberList[i] + numberList2[2];
      console.log(`${numberList[i]} + ${numberList2[2]} = ${sum}`);

      sum = numberList[i] + numberList2[3];
      console.log(`${numberList[i]} + ${numberList2[3]} = ${sum}`);
    }

    console.log("================for===================");
    for (let i = 0; i < numberList.length; i++) {
      for (let j = 0; j < numberList2.length; j++) {
        let sum = numberList[i] + numberList2[j];
        if (sum <= 300 || sum >= 1000) {
          continue;
        }
        console.log(`${numberList[i]} + ${numberList2[j]} = ${sum}`);
      }
    }

    console.log("================for in===================");

    for (let keyI in numberList) {
      for (let keyJ in numberList2) {
        let sum = numberList[keyI] + numberList2[keyJ];
        if (sum <= 300 || sum >= 1000) {
          continue;
        }
        console.log(`${numberList[keyI]} + ${numberList2[keyJ]} = ${sum}`);
      }
    }
    console.log("================for of===================");

    for (let eli of numberList) {
      for (let elj of numberList2) {
        const sum = eli + elj;
        if (sum <= 300 || sum >= 1000) {
          continue;
        }
        console.log(`${eli}+${elj}=${eli + elj}`);
      }
    }
    console.log("================for each===================");

    numberList.forEach((eli) => {
      numberList2.forEach((elj) => {
        const sum = eli + elj;
        if (sum > 300 && sum < 1000) {
          console.log(`${eli}+${elj}=${eli + elj}`);
        }
      });
    });

    console.log("===================================");

    // console.log(parseInt(2).toString(2) << 1);
  }
});
