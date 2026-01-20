<template>
    <div>
        <nav>
            <RouterLink to="/overview">Overview</RouterLink>
            <RouterLink to="/create">Create</RouterLink>
        </nav>
    </div>
    <div>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped></style>
