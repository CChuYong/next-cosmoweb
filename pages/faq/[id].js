import {useRouter} from "next/router";

export default function FaqBrowse(){
    const route = useRouter();
    console.log(route);
    return "faq browse";
}