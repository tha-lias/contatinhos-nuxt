<template>
    <!-- -- Listagem dos contatos -- -->
    <div class="w-full px-2">
        <!-- -- Item contato -- -->
        <ListaItens v-for="contact in contacts" :key="contact.id">
            {{ contact.name }}
            <template #actions>
                <button @click="editContat(contact.id)">Editar</button>
                <button @click="removeContact(contact.id)">Excluir</button>
            </template>
        </ListaItens>

    </div>

    <UIButton @click="addContact">Adicionar Contato</UIButton>
</template>

<script setup>
const router = useRouter();
const { contactList , deleteContact} = useContacts();
const contacts = contactList()

useHead({
    title: 'Contatinho.com',
    meta: [
        {name: 'description', content: 'Aplicativo de lista de contatos'},
        //twitter
        {name: 'twitter:title', content: 'Contatinho.com'},
        // SEO geral
        {property:'og:title', content: "Contatinho.com"}
    ]
})

const addContact = () => {
    router.push('/form')
}

const editContat = (id) => {
    router.push({ path: '/form', query: {id} })
}

const removeContact = (id) => {
    deleteContact(id);
}
</script>