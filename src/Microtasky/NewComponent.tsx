import React from "react";

type StydentType = {
    id: number,
    name: string,
    age: number
}

export type NewComponentType = {

    /*students: Array<StydentType>*/
    students: StydentType[]

}

let arr = [1, 2, 3]

export const NewComponent = (props: NewComponentType) => {

    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span>age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};