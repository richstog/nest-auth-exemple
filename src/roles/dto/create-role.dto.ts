import { IsString, IsNumber } from "class-validator";

export class CreateRoleDto {
    readonly value: string;

    readonly description: string;
}