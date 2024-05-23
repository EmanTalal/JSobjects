let user = {
    name: "eman",
    email: "emn@gmail.com",
    id: 123,
    available: false,
    check: function() {
        if (this.available == true) {
            console.log("your available");
        } else {
            console.log("Not available")
        }
    },
    address: {
        city: {
            one: "Riyadh",
            tow: "Jedahh",
        },
        strrt: "Unvi",
        location: "Left ..."
    },
    skills: ["Read", "Walk", "Work"]
};

console.log(user);
console.log(user.name)
user.id = 123
console.log(user.id)
delete user.email;
console.log(user.email)
console.log(user.address)
console.log(user.address.city)
console.log(user.skills[2])
console.log(user.check())

console.log(user.skills.join(","))