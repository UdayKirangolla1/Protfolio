// Filter out problematic attributes that might be added by browser extensions
export const filterProps = (props: Record<string, any>) => {
  const filteredProps = { ...props }
  // Remove attributes that are commonly added by browser extensions
  delete filteredProps.fdprocessedid
  delete filteredProps.fdprocessedid2
  delete filteredProps['data_lpignore']
  delete filteredProps['data_form-type']
  delete filteredProps['data-managed']
  // Add any other problematic attributes here if needed
  return filteredProps
}