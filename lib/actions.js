'use server'
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/dist/server/api-utils";

//server actions, so when form is submitted this function gets the submitted data automatically so just need to give a prop as formData. All the functions defined in this file acts as a server actions

export default async function shareMeal(formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    } 
    await saveMeal(meal);
    redirect('/meals')
    revalidatePath('/meals');
}
