<template>
    <div class="contact-container">
        <div class="left-contact">
            <div class="about">
                <span>About</span>
            </div>
            <div class="Projects"><span>Projects</span></div>
            <div class="Resume"><span>Resume</span></div>
        </div>
        <div class="right-contact"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.contact-container{
    width: 100%;
    height: 100%;
    background-color: rgb(255, 0, 191);
    display: flex;
}
.left-contact{
    width: 50%;
    background-color: rgb(124, 100, 118);
    display: flex;
    flex-direction: column;
}
.left-contact > div{
  padding: 0 0 0 12px;
}
.right-contact{
    width: 50%;
    background-color: rgb(0, 255, 98);
    display: flex;
    flex-direction: column;
}
</style>