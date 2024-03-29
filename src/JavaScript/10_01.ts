export type UserType = {
    name: string
    hair: number
    address: { city: string, house ?: string }
}

export type LaptopType = {
    title: string
}

export type UserWitchLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u. hair / power
    return copy
}

export function moveUser ( u: UserWitchLaptopType, city: string ) {
    const copy = {
        ...u
    }

    copy.address = {
        ...copy.address,
        city: city
    }

    return copy

}
