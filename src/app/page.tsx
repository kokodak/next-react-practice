import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import imageLogo from "../../public/zlogo.png";

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image src={imageLogo} alt="logo"></Image>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
