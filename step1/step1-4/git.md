# git / github 익히기

## 1. 워킹 디렉토리, 로컬 저장소, 스테이지, 원격 저장소의 개념

- **워킹 디렉토리(트리) :** 소스 코드를 작업하는 폴더.
- **로컬 저장소 :** 워킹 디렉토리에서 `git init`하면 내부에 만들어지는 _.git_ 폴더.
- **스테이지 :** `git add` 하면 워킹 디렉토리에서 변경된 내용을 스테이지에 올리고, 커밋 대기 상태가 된다.

  - 스테이지에 올라와 있는 커밋 대기 상태에서 `git commit` 하면 커밋 객체가 되어 로컬 저장소로 온다.

* **원격 저장소 :** `git push` 하면 로컬 저장소에 있는 내용을 git에 있는 원격 저장소에 저장한다.

## 2. add, commit, push

> 1.에서 정리한 내용을 보면 핵심 명령어의 설명이 나와있기는 하지만 추가적으로 정리해봅니다.

![git Flow](https://user-images.githubusercontent.com/18614517/55557402-b9d9ab00-5724-11e9-9492-6666555bc00f.png)
출처: https://stackoverflow.com/questions/2745076/what-are-the-differences-between-git-commit-and-git-push

- **_git add :_** 워킹 디렉토리에서 변경된 내용들을 스테이지에 올리고, 커밋 대기 상태로 만든다.(=스테이지에 올라간다.)

  - 워킹 디렉토리에서 변경된 파일이 있더라도 `git add`하지 않으면 커밋 될 수 없음
  - 또한 커밋된 파일이더라도, 다시 수정되었을 경우에는 다시 `git add`해줘야함
  - 파일을 선택적으로 커밋할 수 있도록 도와줌
    - 워킹 디렉토리에서 변경된 파일이 여러 개인데 한꺼번에 커밋하면 좋지 않기 때문

- **_git commit :_** 커밋 대기 상태에 있는 내용들이 하나의 버젼으로 만든다. (=로컬 저장소에 들어간다.)

  - 여기서 commit이란 .git 디렉 토리 내부에 커밋 객체를 만드는 행동
  - 로컬 저장소에 있는 .git 파일을 지우거나 컴퓨터가 망가지는 경우에 commit들이 날아감

- **_git push :_** 로컬 저장소에 있는 내용을 원격 저장소로 옮긴다.

  - 로컬 저장소와 원격 저장소의 내용이 동일한 경우가 best

- **_git status :_** 워킹 디렉토리와 스테이지, 로컬 저장소를 비교해서 보여줌
  - 수정된 파일을 add 하지 않았을 때: 워킹 디렉토리와 스테이지의 index(가장 최근의 commit까지 완료된 상태를 저장)를 비교해서 보여줌
  - 수정된 파일을 add 했을 때: 스테이지와 로컬 저장소를 비교해서 보여줌

## 3. branch, checkout

- **_branch :_** 특정 commit에 대한 참조(reference)

  - `git branch <branch name>`
  - 새로운 기능을 추가로 개발할 때 브랜치를 땀
  - 초기의 commit을 제외하고 모든 commit은 부모 commit을 가지고 있기 때문에, 브랜치는 특정 commit과 그 부모 commit들을 포함하는 모든 작업 내역을 참조함

- **_checkout :_** 내가 사용할 브랜치로 이동한다.

  - `git checkout <branch name>`

## 4. merge, rebase

- **_merge :_** 두 개의 브랜치를 합쳐서, 두 개의 부모를 가리키는 특별한 커밋을 만든다.

  - `git check out master`, `git merge <branch name>`
  - 먼저 마스터 브랜치로 이동하여, 합칠 브랜치를 merge 해야함

- **_rebase :_** 두 개의 브랜치를 합치는 또다른 방법. 합칠 브랜치의 커밋들을 모아서 복사한 뒤, 마스터 브랜치에 떨궈놓는다.

  - `git rebase master`
  - 마스터 브랜치로 이동할 필요 없음

## 5. fetch, pull

- **_fetch :_** 원격 저장소의 데이터를 로컬에 가져와서 병합한다.

  - 로컬 저장소의 master에 변경 사항이 없을 때는,**fast-forward** 병합
  - 로컬 저장소의 master에 변경 사항이 있을 때, 충돌을 수동으로 해결해야함

- **_pull :_** 원격 저장소의 데이터를 로컬에 가져온다.

  - `FETCH_HEAD`로 checkout하여 데이터를 확인할 수 있음
  - pull = fetch + merge

## 6. 기타

- **git은 파일의 내용 기반으로 object 파일의 이름을 만든다.** 예를 들어, `cp file1.txt file2.txt`를 실행한 후, `git add`했을 때, objects에서는 두 파일을 같은 객체로 인식한다.

  - 자세한 설명은 생활 코딩 영상 참조

- **master? head? origin?**

  - **_master :_** git 저장소를 초기화 했을 때 만든 메인 브런치

    - 나의 경우는 codesquad

  - **_head( \*) :_** 현재 브랜치에서 가장 최근 commit 을 참조하고 있는 것

    - 혼자 git을 사용했을 때에는 브랜치가 master 밖에 없었기 때문에, 항상 _HEAD -> master_ 였음
    - checkout하면 현재 브랜치가 바뀌기 때문에 HEAD를 이동 시킬 수 있음

  - **_origin :_** 로컬 저장소를 부르는 말

    - `git push origin <branch_name>` 은 original remote repository에 브랜치를 푸쉬하라는 의미임

- **기억해야 하는 명령어**
  - `git log` : commit 이력을 볼 수 있다.
  - `glog --all` : 브랜치와 커밋의 변화를 쉽게 볼 수 있다.
