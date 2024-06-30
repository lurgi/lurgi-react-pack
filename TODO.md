# Progressive Image

- Progressive Loading을 내장한 Image 컴포넌트 입니다. 일반적인 img요소와 동일하게 사용하면 됩니다.

1. [x] 컴포넌트의 이름은 `<Image>`입니다.
2. [x] 이미지를 받아오면, 'Compressor.js'라이브러리를 통해 저화질의 이미지를 만들고, 'src' 상태를 통해 우선적으로 렌더링합니다.
3. [x] 기존의 이미지의 로딩이 준비되면 'src'상태에 고화질의 이미지를 할당합니다.
4. [x] 100KB보다 용량이 작은 경우, Progressive Loading을 적용하지 않습니다.
5. [x] 저화질 이미지를 생성하는데 실패했고, 이미지를 로드중이라면, 스켈레톤 이미지를 보여줍니다.

# Modal

1. [ ] props로 isOpen, style을 받습니다.
2. [ ] 합성 컴포넌트 패턴을 사용하여 다음과 같은 컴포넌트를 export합니다.
   - [ ] Modal.Header
   - [ ] Modal.Main
   - [ ] Modal.Footer
   - [ ] Modal.ToggleBtn
