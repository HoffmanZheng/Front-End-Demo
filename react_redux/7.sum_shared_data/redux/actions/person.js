import { Add_PERSON } from "../constant"

export const createAddPersonAction = personObj => ({type: Add_PERSON, data: personObj})