const Controls = ({current, total, onChange}) => {

    return(
        <section>

<section>
          <button type="button"  disabled={current === 1 }  onClick={() => onChange(-1)}>
            Назад
          </button>
          <button type="button" disabled={current  === total} onClick={() => onChange(1)}>
            Вперед
          </button>
        </section>

        </section>
    )
}

export default Controls