import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface CoverImg {
  img?: string | undefined;
  alt?: string;
  user?: {
    firstname?: string;
    lastname?: string;
  };
}

export default function ProfileCover({ img, user, alt }: CoverImg) {
  const firstInitials = user?.firstname?.charAt(0);
  const lastInitials = user?.lastname?.charAt(0);

  return (
    <Avatar>
      <AvatarImage src={img} alt={alt} />
      <AvatarFallback className={cn("uppercase")}>
        {`${firstInitials}.${lastInitials}`}
      </AvatarFallback>
    </Avatar>
  );
}
