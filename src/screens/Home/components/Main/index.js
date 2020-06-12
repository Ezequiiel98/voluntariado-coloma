import React from 'react';

import Button from '../Button';
import Title from '../../../../components/Title';

import styles from './index.module.scss';

export default function Main() {
  return (
    <section className={styles.main} id="main">
      <Title Tag="h1" center text="¡HOLA!" />
      <div className={styles.container}>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum blanditiis vel placeat cum facere voluptas ea, nemo enim harum, aut quis. Alias molestiae culpa neque officiis iusto veniam dolore est consectetur vitae. Rerum fuga assumenda ad magnam in impedit laudantium reiciendis possimus, voluptatibus nam cumque aliquid sapiente repellendus aspernatur veritatis quaerat sunt, libero voluptas, ullam unde distinctio repellat doloremque. Nulla exercitationem quas laboriosam quos, tempora vitae praesentium molestias esse nisi explicabo voluptatum et. Quisquam enim perspiciatis unde dolores voluptatum harum earum qui quos similique rem dicta quo odit deserunt, dolorum provident aut aliquid in atque cum. Ducimus perferendis quidem vero blanditiis sunt eos quasi magnam aspernatur, eligendi illo harum adipisci provident voluptas voluptates asperiores error quod natus itaque consectetur! Nostrum delectus, sequi similique harum repudiandae laboriosam hic nam. Necessitatibus accusamus sapiente laboriosam nulla quisquam id. Quia, ad! Accusantium officiis at possimus tempora nam maiores architecto excepturi nostrum commodi eius. </p>
        <Button text="Cómo separar" path="/como-separar" />
        <Button text="Dónde llevar los residuos" path="/donde-llevar" />
      </div>
    </section>
  );
}
