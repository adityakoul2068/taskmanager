const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;


mongoose.set('strictQuery', false);

// BAGvFKLeELUSp9J2
async function main() {
    await mongoose.connect("mongodb+srv://adityakoul2003:BAGvFKLeELUSp9J2@cluster0.aoqqku8.mongodb.net/Cluster0?retryWrites=true&w=majority");
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();