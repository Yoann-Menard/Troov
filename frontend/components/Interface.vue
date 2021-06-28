<template>
  <div class="Interface container">
    <div class="text-container">
      <h1 class="header">Le header de l'interface</h1>
      <p class="snippet">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, ad perspiciatis magnam sint deleniti fugit vero. Illo,
        libero quam perspiciatis harum ipsam rem dolorum iure corrupti omnis
        odit assumenda cupiditate. Tempora, amet quia necessitatibus nam
        inventore voluptatibus commodi, qui voluptatum perferendis, soluta
        voluptas! Commodi, dolorem. Cupiditate ducimus nihil praesentium
        doloribus, eveniet, asperiores nam vel veniam perferendis, porro ea
        error officia! Animi blanditiis iste sint eos? Aspernatur enim
        architecto repellat eligendi id qui nam? Esse natus veritatis optio
        aliquid error odit enim magnam. Quae placeat molestiae ullam ea deserunt
        aliquam distinctio. Voluptatem omnis alias totam consequuntur distinctio
        ipsum ullam? Quo itaque, repudiandae dolorem facere nobis, hic dicta
        maiores est ut, molestias impedit labore. Mollitia voluptas, minima
        magnam dolor dolore totam illo? Voluptatem, libero! Rerum est vel
        suscipit ratione iure beatae eum id et error esse. Dolorem, itaque
        provident? Placeat, perferendis laboriosam fugiat a nostrum error.
        Laudantium laborum placeat quas asperiores iure?
      </p>
      <button class="button btn">Boutton</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Interface {
  height: 50vh;
  position: relative;
  display: flex;
  padding: 5rem 0;
  align-items: flex-start;
  justify-content: space-between;
}
.text-container {
  width: 50%;
  margin-top: 4rem;
}
.header {
  font-weight: 900;
  font-size: 5rem;
}
.snippet {
  color: grey;
  font-size: 1.25rem;
}
.image {
  width: 27.5rem;
  margin-top: 2rem;
}
.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 20rem;
  font-weight: 700;
  transition: 0.5s;
}
.button:hover {
  width: 21.5rem;
}
@media (max-width: 500px) {
  .Interface {
    height: 40vh;
  }
}
</style>
