import Link from "next/link";
import { PiArrowSquareOutFill } from "react-icons/pi";

import { PunishmentType } from "@/types";

import { Button } from "@/components/ui/button";

interface PunishmentInfoButtonProps {
  type: PunishmentType,
  id: string
}

export const PunishmentInfoButton = ({
  type,
  id
}: PunishmentInfoButtonProps) => (
  <Link href={`/${type}s/${id}`}>
    <Button size="icon_sm" variant="secondary" className="transition ease-in-out hover:scale-110">
      <PiArrowSquareOutFill />
    </Button>
  </Link>
)