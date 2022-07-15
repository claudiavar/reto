export const Header = () => {
    return (
        <header>
            <div class="p-5 text-center bg-image imga">
            <nav class="navbar navbar-expand-lg navbar-light nave">
            <a class="navbar-brand text-white" href="#a">Loopstudios</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#a">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#a">Careers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#a">Events</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled text-white" href="#a">Products</a>
                </li>
                </ul>
            </div>
            </nav>
            </div>
  </header>
    );
}