import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, push, onValue } from 'firebase/database';
import './ResenasSection.scss';

const ResenasSection = () => {
  const [reseñas, setReseñas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [localVisitado, setLocalVisitado] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [hoverCalificacion, setHoverCalificacion] = useState(0);
  const [comentario, setComentario] = useState('');

  // Cargar reseñas
  useEffect(() => {
    const reseñasRef = ref(database, 'reseñas');
    const unsubscribe = onValue(reseñasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setReseñas(lista.reverse());
      } else {
        setReseñas([]);
      }
    }, (error) => {
      console.error('Error al cargar reseñas:', error);
      setReseñas([]);  // Fallback si falla conexión
    });

    return () => unsubscribe();  // Limpia listener
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !localVisitado || calificacion === 0 || !comentario) {
      alert('Llena todos los campos');
      return;
    }

    const nueva = {
      nombre,
      local: localVisitado,
      calificacion,
      comentario,
      fecha: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    const reseñasRef = ref(database, 'reseñas');
    push(reseñasRef, nueva)
      .then(() => {
        console.log('Reseña guardada');
      })
      .catch((error) => {
        console.error('Error al guardar reseña:', error);
      });

    setNombre('');
    setLocalVisitado('');
    setCalificacion(0);
    setComentario('');
  };

  const promedio = reseñas.length > 0 
    ? (reseñas.reduce((sum, r) => sum + r.calificacion, 0) / reseñas.length).toFixed(1)
    : '0.0';

  return (
    <section className="resenas">
      <div className="resenas__header">
        <h2 className="resenas__title">Reseñas de Clientes</h2>
        <div className="resenas__rating">
          ⭐ {promedio} ({reseñas.length} reseñas)
        </div>
      </div>

      <p className="resenas__subtitle">
        Lee las experiencias de nuestros clientes o comparte la tuya.
      </p>

      <div className="resenas__container">
        <div className="resenas__list">
          {reseñas.length === 0 ? (
            <p className="resenas__empty">Aún no hay reseñas. ¡Sé el primero!</p>
          ) : (
            reseñas.map((r) => (
              <div key={r.id} className="resenas__card">
                <div className="resenas__card-header">
                  <div>
                    <strong>{r.nombre}</strong>
                    <span className="resenas__local">{r.local}</span>
                  </div>
                  <div className="resenas__stars">
                    {'⭐'.repeat(r.calificacion)}
                  </div>
                </div>
                <p className="resenas__comment">{r.comentario}</p>
                <p className="resenas__date">{r.fecha}</p>
              </div>
            ))
          )}
        </div>

        <div className="resenas__form-container">
          <div className="resenas__form-card">
            <h3 className="resenas__form-title">Deja tu Reseña</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Tu Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="resenas__input"
                required
              />

              <select
                value={localVisitado}
                onChange={(e) => setLocalVisitado(e.target.value)}
                className="resenas__input"
                required
              >
                <option value="">Selecciona un local</option>
                <option>Tecnocenter</option>
                <option>Fortanell Local 355</option>
                <option>Fortanell Local 168</option>
              </select>

              <div className="resenas__rating-input">
                <span>Calificación: </span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`resenas__star ${hoverCalificacion >= star || calificacion >= star ? 'filled' : ''}`}
                    onMouseEnter={() => setHoverCalificacion(star)}
                    onMouseLeave={() => setHoverCalificacion(0)}
                    onClick={() => setCalificacion(star)}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              <textarea
                placeholder="Comparte tu experiencia..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                className="resenas__textarea"
                rows="4"
                required
              />

              <button type="submit" className="resenas__submit">
                Enviar Reseña
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResenasSection;