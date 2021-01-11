import Team from "./Team";
import {prop, Ref} from "@typegoose/typegoose";
import Exercise from "./Exercise";


export enum SolutionStatus {
    PENDING = "oczekujace",
    CORRECT = "poprawne",
    ERROR_PRESENTATION = "blad_prezentacji",
    ERROR_COMPILATION = "blad_kompilacji",
    ERROR_TIME = "blad_czasowy",
    ERROR_EXECUTION = "blad_wykonania",
}

class SolutionFile {
    @prop({required: true})
    public name!: string

    @prop({required: true})
    public size!: number

    @prop({required: true})
    public code!: string
}



export default class Solution {
    @prop({ required: true, ref: `Team` })
    public autor!: Ref<Team>

    @prop({ required: true, ref: `Exercise` })
    public exercise!: Ref<Exercise>

    @prop({required: true})
    public sent!: Date

    @prop({required: true, enum: SolutionStatus, default: SolutionStatus.PENDING})
    public status!: SolutionStatus;

    @prop()
    public solutionTime: number

    @prop({required: true})
    solutionFile!: SolutionFile
}
