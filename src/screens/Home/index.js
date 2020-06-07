import React from 'react';

import Header from './components/Header';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main} id="main">
        <h1 className={styles.title}>¡HOLA!</h1>
        <div className={styles.container}>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum blanditiis vel placeat cum facere voluptas ea, nemo enim harum, aut quis. Alias molestiae culpa neque officiis iusto veniam dolore est consectetur vitae. Rerum fuga assumenda ad magnam in impedit laudantium reiciendis possimus, voluptatibus nam cumque aliquid sapiente repellendus aspernatur veritatis quaerat sunt, libero voluptas, ullam unde distinctio repellat doloremque. Nulla exercitationem quas laboriosam quos, tempora vitae praesentium molestias esse nisi explicabo voluptatum et. Quisquam enim perspiciatis unde dolores voluptatum harum earum qui quos similique rem dicta quo odit deserunt, dolorum provident aut aliquid in atque cum. Ducimus perferendis quidem vero blanditiis sunt eos quasi magnam aspernatur, eligendi illo harum adipisci provident voluptas voluptates asperiores error quod natus itaque consectetur! Nostrum delectus, sequi similique harum repudiandae laboriosam hic nam. Necessitatibus accusamus sapiente laboriosam nulla quisquam id. Quia, ad! Accusantium officiis at possimus tempora nam maiores architecto excepturi nostrum commodi eius. </p>
          <button className={styles.button} type="button">
            Cómo separar
          </button>
          <button className={styles.button} type="button">
            Dónde llevar los residuos
          </button>
        </div>
      </main>
    </div>
  );
}
