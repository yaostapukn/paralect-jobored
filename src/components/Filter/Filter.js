export function Filter({ onChangeFilterConfig }) {
  const handleClickFilter = () => {
    onChangeFilterConfig('тут конфиг который я меняю')
  }
  return (
    <>
      <button onClick={handleClickFilter}>отправить</button>
    </>
  )
}
