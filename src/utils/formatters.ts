import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function distanceToNowDate(distantDate: Date) {
  return formatDistanceToNow(distantDate, {
    addSuffix: true,
    locale: ptBR,
  });
}
