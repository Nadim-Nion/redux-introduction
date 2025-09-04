// import { Button } from "@/components/ui/button";
// import { removeUser } from "@/redux/features/user/userSlice";
// import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
// import { Trash2 } from "lucide-react";

export default function UserCard({user}: {user: IUser}) {

    // const dispatch = useAppDispatch();

  return (
   <div className="border px-5 py-3 rounded-md h-[60px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>
            {user.name}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          {/* <Button onClick={() => dispatch(removeUser(user.id))}>
            <Trash2 />
          </Button> */}
        </div>
      </div>
    </div>
  )
}
