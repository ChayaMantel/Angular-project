export class Recipe {
    recipeCode!: number;
    recipeName!: string;
    categoryCode!: number;
    preparationTimeMinutes!: number;
    difficultyLevel!: number;
    dateAdded!: Date;
    ingredients!: string[];
    preparationMethod!: string[];
    userCode!: number;
    imageRouting!: string;
}