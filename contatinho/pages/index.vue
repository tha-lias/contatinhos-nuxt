<template>
    <!-- -- Listagem dos contatos -- -->
    <div class="w-full px-2">
        <!-- -- Item contato -- -->
        <ListaItens v-for="contact in contacts" :key="contact.id">
            {{ contact.name }}
            <template #actions>
                <button @click="editContat(contact.id)">Editar</button>
                <button>Excluir</button>
            </template>
        </ListaItens>

    </div>

    <UIButton @click="addContact">Adicionar Contato</UIButton>
</template>

<script setup>
const router = useRouter();
const { contactList } = useContacts();
const contacts = contactList()

const addContact = () => {
    router.push('/form')
}

const editContat = (id) => {
    router.push({ path: '/form', query: {id} })
}
</script>