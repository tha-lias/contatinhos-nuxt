import { v4 as uuid } from 'uuid'
export default () => {
    const contactList = () => useState('contact_list', () => [])

    const createContact = ({ name, email, phone }) => {
        const id = uuid()
        contactList().value.push({id, name, email, phone})
    }

    const updateContact = (id, {name, email, phone}) => {
        contactList().value = contactList().value.map(contact => {
            if (contact.id === id) {
                return { ...contact, name, email, phone}
            }
        })
    }

    const deleteContact = (id) => {
        contactList().value = contactList().value.filter(contact => contact.id != id)
    }

    const getContact = (id) => {
        return contactList().value.find(contact => contact.id === id)
    }

    return {
        contactList,
        createContact,
        updateContact,
        deleteContact,
        getContact,
    }
}