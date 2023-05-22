import { Loader } from '@mantine/core'
export function LoaderComp() {
  return (
    <div className="loader__wrap">
      <Loader
        color="indigo"
        size="xl"
        variant="dots"
        className="loader__comp"
      />
    </div>
  )
}
