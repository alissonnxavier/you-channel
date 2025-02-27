import { db } from "@/db";
import { categories } from "@/db/schema";


const categoryNames = [
    "Technology",
    "Science",
    "Health",
    "Education",
    "Sports",
    "Arts",
    "Politics",
    "Finance",
    "Travel",
    "Food",
    "Entertainment",
    "Lifestyle",
    "Environment",
    "History",
    "Culture",
    "Music",
    "Literature",
    "Fashion",
    "Gaming",
    "Automobile"
];

async function main() {
    console.log("Seeding categories...");

    try {
        const values = categoryNames.map((name) => ({
            name,
            description: `Videos related to ${name.toLocaleLowerCase()}`,
        }));

        await db.insert(categories).values(values);

        console.log("Categories seeded successfully!");
    } catch (error) {
        console.error("Error seeding categories:", error);
        process.exit(1);
    }
};

main();

