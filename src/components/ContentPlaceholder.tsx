type ContentPlaceholderProps = {
  section?: string
  label?: string
}

export function ContentPlaceholder({ section, label }: ContentPlaceholderProps) {
  const todoLabel = label ?? section ?? 'Content'

  return (
    <>
      {/* TODO: [DR. ABRAHAMS TO SUPPLY] — {todoLabel} */}
      <p className="text-iss-body/70 italic font-light border-l-2 border-iss-teal/30 pl-4">
        Content pending medical review.
      </p>
    </>
  )
}
