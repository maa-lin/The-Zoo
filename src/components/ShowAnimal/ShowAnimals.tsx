import type { IAnimal } from "../../models/IAnimal"

type ShowAnimalProps = {
    animal: IAnimal
}

export const ShowAnimals = (props: ShowAnimalProps) => {

    return <div>
        <div>
            <img src={props.animal.imageUrl} alt={`Photo of ${props.animal.name}, ${props.animal.latinName}`} />
        </div>
        <h2>{props.animal.name}</h2>
        <p>{props.animal.shortDescription}</p>
        <div>
            <span>Status: </span>
            <strong>{props.animal.name} har nyss ätit mat</strong>
        </div>
        <button>Mer om {props.animal.name}</button>
    </div>
}