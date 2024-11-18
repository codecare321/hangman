# Hangman

# Facts

```
tailwind or bootstrap most famous disadvantage

 in classname you have to write a lot class

 and in early stage startup where repeted css written over there thats why use tailwind css or other



  Form default behavior is page refresh
  e.preventDefault(); will not allow to do default behaviour


  Single programming responsibility tell that
  only  one function responsibillity


  suppose form responsibility
    ui responsibility how it look
    form submit logic implement
    text input change logic


    rendering list

    const arr = [1,2,3,4,5];

     const arr = ['<h1>sdsds</h1>'];

    {arr}

    it will print this <h1>sdsds</h1>

    in arr.map you can write jsx like h1

```

# Presenter Container Pattern

[ Presenter Container Pattern](https://www.patterns.dev/react/presentational-container-pattern)

```


if you have component

in 2 layer visualize the component

1 layer =  presentation layer (how it look)

2 layer = container layer (what logical? )

container layer call the presentation layer





```

# tailwind property

```
    1 tailwind unit : 4px

    px-4 : x access 4 tailwind unit (16px)

    py-4: y access 4 tailwind unit (16px)


    if you want to do custom css in class name you can write like this

    px-[17px]


    if you write border in classname = border

    border: 1px

    you dont have to assume for this you can see tailwind class

    rounded you can give border type rounded and other

    rounded: 4px

    rounded-md: 6px

    w-full == will take full width of parent class


    mx-1 = x access margin 1 unit of tailwind 4px
    m-1 = x and y access margin

```

# calling function in class name

```

function getButtonStyling(styleType) {
  if (styleType === "primary") {
    return "bg-blue-500";
  } else if (styleType === "secondary") {
    return "bg-gray-500";
  } else if (styleType === "error") {
    return "bg-red-500";
  } else if (styleType === "success") {
    return "bg-green-500";
  } else if (styleType === "warning") {
    return "bg-yellow-500";
  }
}


className={`${getButtonStyling(styleType)}}


```

# common JSX Facts

```

  you can only write single parent in return.
  in parent you can write nested

  if you dont want to do in node of dom

  then you can use fragment <></>

  you can write comment like this in component
       {/*  */}






```

# component memory

```

  memory management

    suppose input type text

    when click to button it need show text hide and show


    in ui need changes




  variable cannot track in ui when it change in any click event or event

   let inputType = "password";


  function handleShowHideClick() {
    console.log("show hide click");
    if (inputType === "password") {
      inputType = "text";
    } else {
      inputType = "password";
    }
  }

  <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />


    Why?

    maybe it is possible that you want to use variable for algorithm purpose not for ui
    maybe you want dont track variable

    variable changes change is not tracked

    if react start to trac(component update) variable changes but you dont want in some case

    2 reason

    function inside variable it store in memory
    now i call function 2 or 3 type

    then variable take original value

    moral of the story is

    when ui update function component call


    that's why you have to use special variable


   Hooks

    useState() == state variable return ;

```

# react router dom

```
 <BrowserRouter>
      <App />
  </BrowserRouter>
  it will work as parent router and app as child


in app.jsx use routes


pass data to one component to another

  pass data
  using state u can pass


  setTimeout(() => {
        navigate("/play", { state: { value } });
  }, 1000);


fetch data:

  const location = useLocation();
  const data = location.state;
  {data.value}

```
