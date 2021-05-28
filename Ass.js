var doctor =
{
    lastName: "JesuFeranmi",
    firstName: "Semilore",
    Age: 17,
    Address: "Abeokuta",
    displayFullName: function () {
        return this.lastName + " " + this.firstName;

    },
    displayAge: function () {
        return this.Age + 5;
    }

}
console.log(doctor.displayFullName());
console.log(doctor.displayAge());

