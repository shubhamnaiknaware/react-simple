export default function getUser() {
  const user = {
    name: "shubham",
    lastName: "naiknaware",
    fullName: function () {
      return this.name + " " + this.lastName;
    },
  };
  const day = 10;

  let val = "name";

  val = val ? "shubham" : "Tom";

  const weather = "cold";

  return (
    <diV>
      <h1>{user.fullName()}</h1>
      <h1>{day}</h1>
      <h1>{weather + " " + val}</h1>
      <h1>{"name"}</h1>
    </diV>
  );
}
