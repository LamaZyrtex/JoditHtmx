using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using JoditHtmx.Models;

namespace JoditHtmx.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private static int _editorCount = 1;
    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult AddEditor()
    {
        _editorCount++;
        return PartialView("_editorContainer", _editorCount);
    }
    
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
