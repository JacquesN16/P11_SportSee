import React from 'react'
import Information from './Information'
import { ReactComponent as Calorie } from './icons/calorie.svg'
import { ReactComponent as Protein } from './icons/protein.svg'
import { ReactComponent as Lipide } from './icons/lipide.svg'
import { ReactComponent as Glucide } from './icons/glucide.svg'


export default function InformationList (props){
    return (
        <>
            <Information
                icon={<Calorie />}
                title="Calories"
                value={`${props.calorie}kCal`}
            />
            <Information
                icon={<Protein />}
                title="Proteins"
                value={`${props.protein}g`}
            />
            <Information
                icon={<Glucide />}
                title="Glucide"
                value={`${props.glucoside}g`}
            />
            <Information
                icon={<Lipide />}
                title="Lipides"
                value={`${props.lipid}g`}
            />
        </>
    )
}




