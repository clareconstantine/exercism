const INVALID: string = 'Invalid input DNA.'
  
export function toRna(dna: string) {
  let rna: string = '';
  for (const dnaNucleotide of dna) {
    rna = rna + convertNucleotide(dnaNucleotide);
  }
  return rna;
}

function convertNucleotide(nucleotide: string) {
  switch (nucleotide) {
    case 'G':
      return 'C';
    case 'C':
        return 'G';
    case 'T':
        return 'A';
    case 'A':
        return 'U';
    default:
      throw INVALID;
  }
}
