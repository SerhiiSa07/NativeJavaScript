import {makeHairstyle, moveUser, UserType, UserWitchLaptopType} from "./10_01";


test('referense type test', () => {
    let user: UserType = {
        name: 'Sergiy',
        hair: 32,
        address: {
            city: 'Kiev'
        }
    }

    const awesomeUser =  makeHairstyle(user, 2 )

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test('change address.', () => {
    let user: UserWitchLaptopType = {
        name: 'Serhiy',
        hair: 32,
        address: {
            city: 'Kiev',
            house: '12'
        },
        laptop: {
            title: 'Lenovo Legion W520'
        }
    }

    const movedUser = moveUser(user, 'Kharkiv')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kharkiv')


} )
