//------------------------#1
function timeOut(data, ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data);
        }, ms)
    })
}

timeOut({name: "user"}, 1000).then((data) => console.log("Hello!", data.name))


//------------------------#2


async function getUserInfo() {
    return timeOut({name: 'Vic', age: 21, id: 1}, 1000)
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return timeOut(userInfo, 1000)
}

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return timeOut(userInfo, 1000)
}

async function getResult() {
    let userInfo = await getUserInfo();
    let userAvatar = await getUserAvatar(userInfo);
    let userAdditionalInfo = await getUserAdditionalInfo(userAvatar);
    console.log(userAdditionalInfo);
}

getResult();

//------------------------#3

async function getUser() {
    return {name: 'Vic', age: 21, id: 1};
}

async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error');
    } catch (err) {
        console.log(err)
    }
}

getInfo();

