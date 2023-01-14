import client from "./index";

async function seed() {
    await client.user.create({
        data: {
            name: "Bene",
        },
    });
}

seed().then(() => {
    console.log("Database seeding done. 🌱");
});
