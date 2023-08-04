export interface HasherComparer {
  compare: (plainText: string, digest: string) => Promise<boolean>
}
