interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps): JSX.Element => {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados neste dia"
        className="h-3 rounded-xl bg-violet-600"
        aria-value={progress}
        style={{
          width: `${progress}%`
        }}
      ></div>
    </div>
  )
}
