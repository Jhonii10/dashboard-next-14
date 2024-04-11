'use client'
import Notiflix from "notiflix";

const confirmDelete = ()=>{
  Notiflix.Confirm.show(
      'Eliminar Producto',
      '¿Estas seguro que quieres eliminar este producto?',
      'Eliminar',
      'Cancelar',
      function okCb() {
          alert('eliminado')
      },
      function cancelCb() {
        return
      },
      {
        width: '320px',
        borderRadius: '8px',
        titleColor:'black',
        okButtonBackground:'black',
        cssAnimationStyle:'zoom',

      },
    );
}


export default function Page() {
    return <button onClick={confirmDelete}>customers buttonage</button>;
  }