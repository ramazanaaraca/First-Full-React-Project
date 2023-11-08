

const Wrapper = ({Parent , Child , children}) => {
  return (
    <section className={Parent}>
        <div className='max-container'>
            <div className={Child}>
              {children}
            </div>
        </div>
    </section>
  )
}

export default Wrapper;